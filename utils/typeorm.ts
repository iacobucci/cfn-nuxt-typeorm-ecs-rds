import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany, ManyToMany } from "typeorm";

export let SharedBaseEntity = BaseEntity || class { };
export let SharedEntity = Entity || function () { return function () { return; }; };
export let SharedPrimaryGeneratedColumn = PrimaryGeneratedColumn || function () { return function () { return; }; };
export let SharedColumn = Column || function () { return function () { return; }; };
export let SharedManyToOne = ManyToOne || function () { return function () { return; }; };
export let SharedOneToMany = OneToMany || function () { return function () { return; }; };
export let SharedManyToMany = ManyToMany || function () { return function () { return; }; };
