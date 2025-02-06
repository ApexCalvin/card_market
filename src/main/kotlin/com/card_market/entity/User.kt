package com.card_market.entity

import jakarta.persistence.Entity
import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id

@Entity
data class User(
    @Id //set primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null, // Default values creates default constructor
    var username: String = "",
    var password: String = "",
)