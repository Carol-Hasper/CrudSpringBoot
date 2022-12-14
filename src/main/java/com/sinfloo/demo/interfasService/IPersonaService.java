package com.sinfloo.demo.interfasService;

import java.util.Optional;

import com.sinfloo.demo.modelo.Persona;
import java.util.List;

public interface IPersonaService {
public List<Persona>listar();
public Optional <Persona>listarId(int id);
public int save(Persona p);
public void delete(int id);
}
