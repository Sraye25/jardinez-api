\c jardin_db;

CREATE TABLE IF NOT EXISTS species (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS varieties (
    id SERIAL PRIMARY KEY,
    species_id INTEGER REFERENCES species(id) NOT NULL,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS varietyAssociations (
    id SERIAL PRIMARY KEY,
    weight SMALLINT NOT NULL,
    variety1_id INTEGER REFERENCES varieties(id) NOT NULL,
    variety2_id INTEGER REFERENCES varieties(id) NOT NULL
);

CREATE TABLE IF NOT EXISTS climates (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS varietyTimes (
    id SERIAL PRIMARY KEY,
    variety_id INTEGER REFERENCES varieties(id) NOT NULL,
    climate_id INTEGER REFERENCES climates(id) NOT NULL,
    seedingIndoorBegin INTEGER,
    seedingIndoorEnd INTEGER,
    seedingOutdoorBegin INTEGER,
    seedingOutdoorEnd INTEGER,
    harvestBegin INTEGER,
    harvestEnd INTEGER
);
