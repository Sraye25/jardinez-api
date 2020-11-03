\c jardin_db;

CREATE TABLE IF NOT EXISTS species (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS varieties (
    id SERIAL PRIMARY KEY,
    species_id INTEGER REFERENCES species(id),
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS varietyAssociations (
    id SERIAL PRIMARY KEY,
    variety1_id INTEGER REFERENCES varieties(id),
    variety2_id INTEGER REFERENCES varieties(id)
);

CREATE TABLE IF NOT EXISTS climates (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    description VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS varietyTimes (
    id SERIAL PRIMARY KEY,
    variety_id INTEGER REFERENCES varieties(id),
    climate_id INTEGER REFERENCES climates(id),
    seedingIndoorBegin INTEGER,
    seedingIndoorEnd INTEGER,
    seedingOutdoorBegin INTEGER,
    seedingOutdoorEnd INTEGER,
    harvestBegin INTEGER,
    harvestEnd INTEGER
);
