package com.watcher.Watcher.API.entity

import jakarta.persistence.*

@Entity
data class Card(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long = 0,
    var name: String = "",
    var rarity: Char = 'C',
    var expansion: String = "",
    var foil: Boolean = false,
    var purchasePrice: Double = 00.00
)
