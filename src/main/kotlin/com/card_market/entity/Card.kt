package com.card_market.entity

import jakarta.persistence.*

@Entity
data class Card(
    @Id //set primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    var name: String = "", // Default value creates default constructor
    var purchasePrice: Double = 0.0
)
