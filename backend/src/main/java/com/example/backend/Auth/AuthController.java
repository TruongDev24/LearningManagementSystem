package com.example.backend.Auth;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private static final Map<String, String> emailToPassword = new ConcurrentHashMap<>();

    public record RegisterRequest(String name, String email, String password) {}
    public record LoginRequest(String email, String password) {}

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest req) {
        if (req == null || req.email() == null || req.password() == null || req.name() == null) {
            return ResponseEntity.badRequest().body(Map.of("message", "Thiếu dữ liệu"));
        }
        if (emailToPassword.containsKey(req.email())) {
            return ResponseEntity.status(409).body(Map.of("message", "Email đã tồn tại"));
        }
        emailToPassword.put(req.email(), req.password());
        return ResponseEntity.ok(Map.of(
                "message", "Đăng ký thành công",
                "email", req.email(),
                "name", req.name()
        ));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest req) {
        if (req == null || req.email() == null || req.password() == null) {
            return ResponseEntity.badRequest().body(Map.of("message", "Thiếu dữ liệu"));
        }
        String stored = emailToPassword.get(req.email());
        if (stored == null || !stored.equals(req.password())) {
            return ResponseEntity.status(401).body(Map.of("message", "Email hoặc mật khẩu không đúng"));
        }
        return ResponseEntity.ok(Map.of(
                "message", "Đăng nhập thành công",
                "email", req.email()
        ));
    }
}


