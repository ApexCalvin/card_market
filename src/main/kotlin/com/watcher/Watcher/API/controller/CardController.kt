package com.watcher.Watcher.API.controller

import com.watcher.Watcher.API.entity.Card
import com.watcher.Watcher.API.repository.CardRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
@RestController
@RequestMapping("/watcher")
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
    fun delete(@PathVariable id: Long) {
        if(!cardRepository.existsById(id)) throw NoSuchElementException("Card id: $id not found.")
        cardRepository.deleteById(id)
    }
}