# Altura Airways Reservation System

A collaborative full-stack airline reservation prototype built with React, Express, and MySQL. The interface covers flight discovery, passenger details, seat selection, booking management, account flows, and administrative screens; the backend demonstrates database-backed flight and account endpoints.

## Stack

- React component-based frontend
- Express REST API
- MySQL relational schema for passengers, flights, seats, reservations, and payments
- bcrypt password hashing

## Local setup

1. Create a MySQL database using `CP317_database_tables.sql`.
2. Copy `.env.example` to `.env` and provide a restricted local database account.
3. Install dependencies with `npm install`.
4. Run `npm start` to start the API on port 5001.
5. In another terminal, run `npm run dev` for the Vite frontend.

```sh
npm run check
```

The check command validates the backend JavaScript and performs a production frontend build.

## Security and data notes

Secrets are read from environment variables and are never committed. Published SQL records are synthetic. The application is a portfolio prototype: production deployment would additionally require request validation, authorization controls, secure session handling, rate limiting, CSRF protections, and a PCI-compliant payment provider.

## Collaboration

This was a collaborative student project. Our group designed and implemented the reservation flow, user interface, API, and relational database together.
