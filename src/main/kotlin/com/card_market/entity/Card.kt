package com.card_market.entity

import jakarta.persistence.*

@Entity
data class Card(
    @Id //set primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null, // Default values creates default constructor
    var cardSet: String = "",
    var collectorNumber: String = "",
    var foil: Boolean = false,
    var purchasePrice: Double = 0.0
)
