/*
 * Copyright 2012-2019 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.coinnolja.web.api.common.config;

import org.springframework.boot.autoconfigure.cache.JCacheManagerCustomizer;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.cache.configuration.MutableConfiguration;
import javax.cache.expiry.CreatedExpiryPolicy;
import javax.cache.expiry.Duration;

import static java.util.concurrent.TimeUnit.SECONDS;

/**
 * Cache configuration intended for caches providing the JCache API. This configuration creates the used cache for the
 * application and enables statistics that become accessible via JMX.
 */
@Configuration
@EnableCaching
class CacheConfiguration {


    @Bean
    public JCacheManagerCustomizer cacheManagerCustomizer() {
        return cm -> {
            cm.createCache("board.category", initConfiguration(Duration.ONE_HOUR));
            cm.createCache("exchange.exchangerate", initConfiguration(Duration.ONE_HOUR));
            cm.createCache("coinindex.indexes", initConfiguration(Duration.ONE_MINUTE));
        };
    }


    /**
     * Create a simple configuration that enable statistics via the JCache programmatic configuration API.
     * <p>
     * Within the configuration object that is provided by the JCache API standard, there is only a very limited set of
     * configuration options. The really relevant configuration options (like the size limit) must be set via a
     * configuration mechanism that is provided by the selected JCache implementation.
     */
    private MutableConfiguration<Object, Object> initConfiguration(Duration duration) {
        return new MutableConfiguration<>()
                .setStatisticsEnabled(true)
                .setExpiryPolicyFactory(CreatedExpiryPolicy.factoryOf(duration));
    }

}
