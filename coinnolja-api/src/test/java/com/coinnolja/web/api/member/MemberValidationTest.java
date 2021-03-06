package com.coinnolja.web.api.member;

import com.coinnolja.web.api.ApiApplicationTests;
import com.coinnolja.web.api.common.util.AesUtil;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ActiveProfiles;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@ActiveProfiles("local")
public class MemberValidationTest extends ApiApplicationTests {

    public static Logger log = LoggerFactory.getLogger(MemberValidationTest.class);

    @Autowired
    private AesUtil aesUtil;

    @Test
    public void validateEmail() {
        String emailStr = "taerimmk@gmail.com";
        Matcher matcher = Pattern.compile("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$", Pattern.CASE_INSENSITIVE).matcher(emailStr);
        log.debug("]-----] validateEmail [-----[ {}", matcher.find());
    }

    @Test
    public void validateEmailString() {
        Long createdAt = LocalDateTime.now().toInstant(ZoneOffset.UTC).toEpochMilli();
        String validStringRaw = RandomStringUtils.randomAlphabetic(20);
        String validString = createdAt + "|" + validStringRaw + "|" + 12;
        log.debug("]-----] validateEmail [-----[ {}", aesUtil.encrypt(validString));

        LocalDateTime createdAtData = Instant.ofEpochMilli(createdAt).atZone((ZoneOffset.UTC)).toLocalDateTime();
        log.debug("]-----] createdAtData [-----[ {}: {}", createdAtData, LocalDateTime.now());
    }

}