package com.card_market.controller

import com.card_market.entity.Card
import com.card_market.repository.CardRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/cardmarket")
class CardController {
    @Autowired
    lateinit var cardRepository: CardRepository

    @GetMapping
    fun getAllCards(): List<Card> {
        return cardRepository.findAll()
    }

    @PostMapping
    fun addCard(@RequestBody card: Card): Card {
        return cardRepository.save(card)
    }

    @DeleteMapping("/{id}")
    fun deleteCard(@PathVariable id: Long) {
        if(!cardRepository.existsById(id)) throw NoSuchElementException("ID #$id not found.") //displays in terminal
        cardRepository.deleteById(id)
    }
}