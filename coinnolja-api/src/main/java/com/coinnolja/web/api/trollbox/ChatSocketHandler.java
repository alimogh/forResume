package com.coinnolja.web.api.trollbox;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.publisher.UnicastProcessor;

import java.io.IOException;
import java.util.Optional;

@Slf4j
public class ChatSocketHandler implements WebSocketHandler {
    private UnicastProcessor<Message> messagePublisher;
    private Flux<String> outputMessages;
    private ObjectMapper mapper;

    public ChatSocketHandler(UnicastProcessor<Message> messagePublisher, Flux<Message> messages) {
        this.messagePublisher = messagePublisher;
        this.mapper = new ObjectMapper();
        this.outputMessages = Flux.from(messages).map(this::toJSON);
    }

    @Override
    public Mono<Void> handle(WebSocketSession session) {
        WebSocketMessageSubscriber subscriber = new WebSocketMessageSubscriber(messagePublisher);
        session.receive()
                .map(WebSocketMessage::getPayloadAsText)
                .map(this::toChatMessage)
                .subscribe(subscriber::onNext, subscriber::onError, subscriber::onComplete);
        log.debug("]-----] ChatSocketHandler::handle textMessage [-----[ {}", outputMessages);
//        log.debug("]-----] ChatSocketHandler::handle outputMessages [-----[ {}", outputMessages.map(session::textMessage));
//        outputMessages.map(s -> {
//            log.debug("]-----] ChatSocketHandler::handle textMessage [-----[ {}", s);
//            return Mono.just(s);
//        }).subscribe();

        return session.send(outputMessages.map(session::textMessage));
    }

    private static class WebSocketMessageSubscriber {
        private UnicastProcessor<Message> messagePublisher;
        private Optional<Message> lastReceivedMessage = Optional.empty();

        public WebSocketMessageSubscriber(UnicastProcessor<Message> messagePublisher) {
            this.messagePublisher = messagePublisher;
        }

        public void onNext(Message message) {
            lastReceivedMessage = Optional.of(message);
            messagePublisher.onNext(message);
        }

        public void onError(Throwable error) {
            error.printStackTrace();
        }

        public void onComplete() {
            lastReceivedMessage.ifPresent(messagePublisher::onNext);
        }
    }


    private Message toChatMessage(String json) {
        try {
//            log.debug("]-----] ChatSocketHandler::toChatMessage outputMessages [-----[ {}", outputMessages.log());
            log.debug("]-----] ChatSocketHandler::toChatMessage json [-----[ {}", json);
            return mapper.readValue(json, Message.class);
        } catch (IOException e) {
            throw new RuntimeException("Invalid JSON:" + json, e);
        }
    }

    private String toJSON(Message message) {
        try {
            return mapper.writeValueAsString(message);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}
