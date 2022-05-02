create database incentiveeplante;

create table users (
    id serial primary key,
    name text not null,
    email text not null,
    idade integer not null,
    cep text not null,
    password text not null
);

create table trees (
    id serial primary key,
    usuario_id integer references users(id),
    name text not null,
    region text not null,
    biome text not null
);