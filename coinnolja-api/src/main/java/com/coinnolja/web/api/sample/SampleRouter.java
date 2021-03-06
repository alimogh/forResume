package com.coinnolja.web.api.sample;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8;
import static org.springframework.web.reactive.function.server.RequestPredicates.*;
import static org.springframework.web.reactive.function.server.RouterFunctions.route;

@Slf4j
@Configuration
public class SampleRouter {

    @Bean
    public RouterFunction<ServerResponse> sampleRouterFunction(SampleHandler handler) {
        return RouterFunctions
                .nest(path("/api/sample"),
                        route(GET("").and(accept(APPLICATION_JSON_UTF8)), handler::findAll)
                                .andRoute(GET("/{id}").and(accept(APPLICATION_JSON_UTF8)), handler::findById)
                                .andRoute(POST("").and(accept(APPLICATION_JSON_UTF8)).and(contentType(APPLICATION_JSON_UTF8)), handler::save)
                );
    }
}
