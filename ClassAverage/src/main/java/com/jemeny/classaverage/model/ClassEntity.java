package com.jemeny.classaverage.model;

import java.util.List;

public record ClassEntity(Long id,
                          String name,
                          List<ProfessorEntity> professors,
                          List<Integer> grades) {
}
