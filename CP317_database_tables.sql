create database Altura;
use Altura;

create table Altura.passenger(
passenger_id int auto_increment unique PRIMARY KEY,
email varchar(255) unique not null,
password_hash varchar(255) not null,
legal_name varchar(255) not null,
date_of_birth date not null,
street_num int not null,
street_city varchar(255) not null,
postal_code varchar(100) not null,
province varchar(255) not null,
country varchar(255) not null,
passport_number varchar(100) unique not null
);

create table Altura.paymentInformation(
payment_info_id int auto_increment unique not null,
passenger_id int not null,
FOREIGN KEY (passenger_id) REFERENCES Altura.passenger(passenger_id),
card_number bigint not null,
CVV int not null,
date_of_expiry date not null,
name_on_card varchar(255) not null,
type_of_card varchar(50) not null,
card_institution varchar(50)
);

create table Altura.airport(
airport_code varchar(100) unique not null PRIMARY KEY,
airport_name varchar(100) not null,
city varchar(100) not null,
province varchar(100) not null,
country varchar(100) not null
);

create table Altura.airline(
airline_code varchar(100) unique PRIMARY KEY,
airline_name varchar(100) unique not null
);

create table Altura.staff(
staff_id int auto_increment unique PRIMARY KEY,
staff_email varchar(100) unique not null,
staff_password_hash varchar(255) not null,
auth_access varchar(255) not null
);

create table Altura.flight( 
flight_id int auto_increment unique PRIMARY KEY,
flight_code varchar(50) unique not null,
airline_code varchar(100) not null,
FOREIGN KEY (airline_code) REFERENCES Altura.airline(airline_code),
origin_airport_code varchar(100) not null,
FOREIGN KEY (origin_airport_code) REFERENCES Altura.airport(airport_code),
dest_airport_code varchar(100) not null,
FOREIGN KEY (dest_airport_code) REFERENCES Altura.airport(airport_code),
departure_time datetime not null,
arrival_time datetime not null,
flight_status varchar(255) not null,
flight_type varchar(100) not null,
trip_paths varchar(100) not null,
total_seats int not null,
available_seats int not null
);

select * from Altura.flight;
create table Altura.seat( 
seat_number varchar(50) not null, #discriminator
flight_id int not null,
FOREIGN KEY (flight_id) REFERENCES Altura.flight(flight_id),
PRIMARY KEY (flight_id, seat_number),
seat_class varchar(50) not null,
seat_status varchar(50) not null
);

create table Altura.reservation( 
reservation_id int auto_increment unique PRIMARY KEY,
passenger_id int not null,
FOREIGN KEY (passenger_id) REFERENCES Altura.passenger(passenger_id),
flight_id int not null,
FOREIGN KEY (flight_id) REFERENCES Altura.flight(flight_id),
seat_number varchar(50) not null,
FOREIGN KEY (flight_id, seat_number) REFERENCES Altura.seat(flight_id, seat_number),
reservation_status varchar(50) not null,
reservation_date datetime not null
);

create table Altura.payment( 
payment_id int auto_increment unique PRIMARY KEY,
reservation_id int not null,
FOREIGN KEY (reservation_id) REFERENCES Altura.reservation(reservation_id),
payment_info_id int not null,
FOREIGN KEY (payment_info_id) REFERENCES Altura.paymentInformation(payment_info_id),
payment_amount float not null,
payment_status varchar(50) not null,
payment_date datetime not null
);

select * from passenger;


