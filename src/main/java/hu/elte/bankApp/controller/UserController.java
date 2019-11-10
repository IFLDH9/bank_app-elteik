package hu.elte.bankApp.controller;

import hu.elte.bankApp.model.PersonalData;
import hu.elte.bankApp.repository.PersonalDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private PersonalDataRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @PostMapping("")
    public ResponseEntity<PersonalData> register(@RequestBody PersonalData user) {
        Optional<PersonalData> oUser = userRepository.getPersonalDataByName(user.getName());
        if (oUser.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(PersonalData.Role.ROLE_USER);
        return ResponseEntity.ok(userRepository.save(user));
    }

    @GetMapping("login")
    public ResponseEntity login() {
        return ResponseEntity.ok().build();
    }

}
