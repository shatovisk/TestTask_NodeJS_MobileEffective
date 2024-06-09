create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

create TABLE event(
    id SERIAL PRIMARY KEY,
    event_type VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person(id)
);