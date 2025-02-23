import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

export let SharedBaseEntity = BaseEntity || class {};
export let SharedEntity = Entity || function () { return function () { return; }; };
export let SharedPrimaryGeneratedColumn = PrimaryGeneratedColumn || function () { return function () { return; }; };
export let SharedColumn = Column || function () { return function () { return; }; };
