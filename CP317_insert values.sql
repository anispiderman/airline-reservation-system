insert into Altura.airport(airport_code, airport_name, city, province, country) values
("YYZ", "Toronto Pearson International Airport", "Toronto", "ON", "Canada"),
("YVR", "Vancouver International Airport", "Vancouver", "BC", "Canada"),
("LAX", "Los Angeles International Airport", "Los Angeles", "CA", "United States"),
("MEX", "Mexico City International Airport", "Mexico City", "CDMX", "Mexico"),
("LHR", "Heathrow Airport", "London", "England", "United Kingdom"),
("CDG", "Charles de Gaulle Airport", "Paris", "Ile-de-France", "France");

insert into Altura.airline(airline_code, airline_name) values
("ACA", "Air Canada"),
("WJA", "WestJet"),
("AAL", "American Airlines"),
("UA", "United Airlines"),
("BAW", "British Airways");

insert into Altura.staff(staff_id, staff_email, staff_password_hash, auth_access) values
(1, "staff01@example.test", "$2b$12$replace.with.generated.hash", "flight analyst"),
(2, "staff02@example.test", "$2b$12$replace.with.generated.hash", "boarding control"),
(3, "staff03@example.test", "$2b$12$replace.with.generated.hash", "flight management");

insert into Altura.passenger(passenger_id, email, password_hash, legal_name, date_of_birth, street_num, street_city, postal_code, province, country, passport_number) values
(1, "passenger01@example.test", "$2b$12$replace.with.generated.hash", "Sample Passenger One", '1990-08-12', 10, "Example Road", "A1A 1A1", "ON", "Canada", "DEMO0001"),
(2, "passenger02@example.test", "$2b$12$replace.with.generated.hash", "Sample Passenger Two", '1979-10-20', 20, "Example Road", "B2B 2B2", "ON", "Canada", "DEMO0002");

insert into Altura.flight(flight_id, flight_code, airline_code, origin_airport_code, dest_airport_code, departure_time, arrival_time, flight_status, flight_type, trip_paths, total_seats, available_seats) values
(1, "ACA001", "ACA", "YYZ", "YVR", '2026-07-20 08:22:00', '2026-07-20 13:00:00', "Scheduled", "Domestic", "Non Stop", 20, 20),
(2, "WJA001", "WJA", "LAX", "LHR", '2026-07-01 10:50:00', '2026-07-01 23:00:00', "In air", "International", "Non stop", 23, 3);

insert into Altura.seat(seat_number, flight_id, seat_class, seat_status) values
("1A", 1, "First", "Reserved"),
("1B", 1, "First", "Available");

insert into Altura.paymentInformation(payment_info_id, passenger_id, card_number, CVV, date_of_expiry, name_on_card, type_of_card, card_institution) values
(1, 1, 4111111111111111, 123, '2029-12-13', "Sample Passenger One", "Test", "Example Institution");

insert into Altura.reservation(reservation_id, passenger_id, flight_id, seat_number, reservation_status, reservation_date) values
(1, 1, 1, "1A", "Reserved", '2026-06-29 11:03:24');

insert into Altura.payment(payment_id, reservation_id, payment_info_id, payment_amount, payment_status, payment_date) values
(1, 1, 1, 1257.48, "Successful", '2026-06-29 11:03:24');

