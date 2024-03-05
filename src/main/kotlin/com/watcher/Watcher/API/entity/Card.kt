package com.watcher.Watcher.API.entity

data class Card(
    var id: Long,
    var name: String,
    var rarity: Char,
    var set: String,
    var foil: Boolean,
    var purchasePrice: Double
)
