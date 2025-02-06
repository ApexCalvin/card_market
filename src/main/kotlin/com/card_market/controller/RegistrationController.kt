package com.card_market.controller

import com.card_market.dto.UserDTO
import com.card_market.entity.User
import com.card_market.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
@Controller
@RequestMapping("/register")
class RegistrationController {
    @Autowired
    lateinit var userRepository: UserRepository

    fun showRegistrationPage(): String {
        return "registerPage"
    }

    @PostMapping
    fun registerUser(@RequestBody userDTO: UserDTO): String{
        val user = User(
            username = userDTO.username,
            password = userDTO.password
        )
        userRepository.save(user)
        return "redirect:/login"
    }
}