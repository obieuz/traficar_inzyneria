--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2 (Debian 17.2-1.pgdg120+1)
-- Dumped by pg_dump version 17.2 (Debian 17.2-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cars; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.cars (
    id integer NOT NULL,
    model text NOT NULL,
    manufacturer text NOT NULL,
    img text NOT NULL,
    latitude text NOT NULL,
    longitude text NOT NULL,
    range integer NOT NULL,
    available boolean NOT NULL,
    price numeric(10,2) NOT NULL,
    horse_power integer NOT NULL,
    fuel_type text NOT NULL,
    gearbox text NOT NULL,
    cubic_capacity integer NOT NULL,
    mileage integer NOT NULL,
    color text NOT NULL,
    year integer NOT NULL,
    registration_number text NOT NULL,
    number_of_seats integer NOT NULL,
    number_of_doors integer NOT NULL,
    CONSTRAINT cars_number_of_doors_check CHECK ((number_of_doors > 0)),
    CONSTRAINT cars_number_of_seats_check CHECK ((number_of_seats > 0)),
    CONSTRAINT cars_year_check CHECK ((year >= 1886))
);


ALTER TABLE public.cars OWNER TO root;

--
-- Name: cars_id_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.cars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cars_id_seq OWNER TO root;

--
-- Name: cars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.cars_id_seq OWNED BY public.cars.id;


--
-- Name: regions; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.regions (
    regionid integer NOT NULL,
    carids integer[],
    latitude text,
    longitude text
);


ALTER TABLE public.regions OWNER TO root;

--
-- Name: regions_regionid_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.regions_regionid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.regions_regionid_seq OWNER TO root;

--
-- Name: regions_regionid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.regions_regionid_seq OWNED BY public.regions.regionid;


--
-- Name: users; Type: TABLE; Schema: public; Owner: root
--

CREATE TABLE public.users (
    userid integer NOT NULL,
    name text,
    surname text,
    history integer[],
    login text,
    password text
);


ALTER TABLE public.users OWNER TO root;

--
-- Name: users_userid_seq; Type: SEQUENCE; Schema: public; Owner: root
--

CREATE SEQUENCE public.users_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_userid_seq OWNER TO root;

--
-- Name: users_userid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: root
--

ALTER SEQUENCE public.users_userid_seq OWNED BY public.users.userid;


--
-- Name: cars id; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.cars ALTER COLUMN id SET DEFAULT nextval('public.cars_id_seq'::regclass);


--
-- Name: regions regionid; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.regions ALTER COLUMN regionid SET DEFAULT nextval('public.regions_regionid_seq'::regclass);


--
-- Name: users userid; Type: DEFAULT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users ALTER COLUMN userid SET DEFAULT nextval('public.users_userid_seq'::regclass);


--
-- Data for Name: cars; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.cars (id, model, manufacturer, img, latitude, longitude, range, available, price, horse_power, fuel_type, gearbox, cubic_capacity, mileage, color, year, registration_number, number_of_seats, number_of_doors) FROM stdin;
1	RS6 AVANT	Audi	./images/cars/audi_rs6.png	54.353306	18.652556	500	t	4.19	600	petrol	automatic	3996	10000	red	2021	GDA12345	5	5
2	E90	BMW	./images/cars/bmw_e90.png	54.354139	18.656167	200	t	3.49	200	diesel	manual	1996	200000	blue	2005	GDA54321	5	3
3	Urus	Lamborghini	./images/cars/urus.png	54.518708	18.556093	300	t	6.99	650	petrol	automatic	3996	10000	yellow	2021	GDA67890	5	5
\.


--
-- Data for Name: regions; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.regions (regionid, carids, latitude, longitude) FROM stdin;
1	{1,2}	54.34	18.638306
2	{3}	54.518328	18.529379
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: root
--

COPY public.users (userid, name, surname, history, login, password) FROM stdin;
0	Robert	Zajac	{}	robzaj	robzaj
1	Kamil	Kowalski	{}	kamkow	kamkow
\.


--
-- Name: cars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.cars_id_seq', 1, false);


--
-- Name: regions_regionid_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.regions_regionid_seq', 1, false);


--
-- Name: users_userid_seq; Type: SEQUENCE SET; Schema: public; Owner: root
--

SELECT pg_catalog.setval('public.users_userid_seq', 1, false);


--
-- Name: cars cars_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_pkey PRIMARY KEY (id);


--
-- Name: cars cars_registration_number_key; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_registration_number_key UNIQUE (registration_number);


--
-- Name: regions regions_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.regions
    ADD CONSTRAINT regions_pkey PRIMARY KEY (regionid);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: root
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (userid);


--
-- PostgreSQL database dump complete
--

