create database incentive_plante;

create table users (
    id serial primary key,
    name text not null,
    email text not null,
    password text not null,
    cep text not null
);

create table trees (
    id serial primary key,
    name text not null,
    region text not null,
    biome text not null
);