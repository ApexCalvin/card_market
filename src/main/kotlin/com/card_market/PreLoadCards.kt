package com.card_market

import com.card_market.entity.Card
import com.card_market.repository.CardRepository
import jakarta.annotation.PostConstruct
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Configuration
import java.util.*

@Configuration
class PreLoadCards {
    @Autowired
    lateinit var cardRepository: CardRepository

    private var runPreLoadCards: Boolean = true;

    @PostConstruct
    fun setup(){
        if(!runPreLoadCards) return;

        val card1 = Card(cardSet = "3ed", collectorNumber = "291", foil = false, purchasePrice = 558.5)
        val card2 = Card(cardSet = "3ed", collectorNumber = "286", foil = false, purchasePrice = 270.5)
        val card3 = Card(cardSet = "3ed", collectorNumber = "282", foil = false, purchasePrice = 500.0)
        val card4 = Card(cardSet = "exp", collectorNumber = "17", foil = true, purchasePrice = 0.0)
        val card5 = Card(cardSet = "ltr", collectorNumber = "791", foil = true, purchasePrice = 100.0)
        cardRepository.saveAll(listOf(card1, card2, card3, card4, card5))
    }
}