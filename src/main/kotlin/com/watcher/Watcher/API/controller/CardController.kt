package com.watcher.Watcher.API.controller

import com.watcher.Watcher.API.entity.Card
import com.watcher.Watcher.API.repository.CardRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
@RestController
@RequestMapping("/watcher")
class CardController {
    @Autowired
    lateinit var cardRepository: CardRepository

    @GetMapping("/")
    fun getAllCards(): List<Card> {
        return cardRepository.findAll()
    }

    @PostMapping("/")
    fun addCard(card: Card): Card {
        return cardRepository.save(card)
    }

    @DeleteMapping("/{id}")
    fun delete(id: Long) {
        if(!cardRepository.existsById(id)) throw NoSuchElementException("Card id: $id not found.")
        cardRepository.deleteById(id)
    }
}