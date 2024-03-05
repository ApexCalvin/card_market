package com.watcher.Watcher.API.repository

import com.watcher.Watcher.API.entity.Card
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface CardRepository : JpaRepository<Card, Long>git