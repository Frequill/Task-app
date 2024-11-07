package se.task.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

@Controller
public class IndexController {

    @Value("classpath:/static/index.html")
    private Resource appIndex;

    @GetMapping({"/", "/task-creator"})
    ResponseEntity<String> index() throws IOException {
        return ResponseEntity.ok(appIndex.getContentAsString(StandardCharsets.UTF_8));
    }

}
