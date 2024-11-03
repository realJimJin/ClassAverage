// src/main/java/com/example/classaverage/controller/ClassController.java
package com.jemeny.classaverage.controller;

import com.jemeny.classaverage.model.ClassEntity;
import com.jemeny.classaverage.service.ClassService;
import com.jemeny.classaverage.service.ClassService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/classes")
public class ClassController {

    private final ClassService classService;

    public ClassController(ClassService classService) {
        this.classService = classService;
    }

    @GetMapping
    public Iterable<ClassEntity> getAllClasses() {
        return classService.getAllClasses();
    }

    @GetMapping("/{id}/grades")
    public Map<String, Object> getClassGrades(@PathVariable Long id) {
        ClassEntity classData = classService.getClassById(id);
        if (classData == null) {
            return null; // Or throw an exception if needed
        }

        Map<String, Object> response = new HashMap<>();
        response.put("gradeDistribution", classService.getGradeDistribution(classData.grades()));
        response.put("statistics", Map.of(
                "mean", classService.calculateMean(classData.grades()),
                "median", classService.calculateMedian(classData.grades()),
                "stdDev", classService.calculateStandardDeviation(classData.grades())
        ));

        return response;
    }
}
