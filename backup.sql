--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

-- Started on 2025-02-06 19:00:21 UTC

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
-- TOC entry 222 (class 1259 OID 16408)
-- Name: cars; Type: TABLE; Schema: public; Owner: postgres
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


ALTER TABLE public.cars OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16407)
-- Name: cars_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.cars_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.cars_id_seq OWNER TO postgres;

--
-- TOC entry 3390 (class 0 OID 0)
-- Dependencies: 221
-- Name: cars_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.cars_id_seq OWNED BY public.cars.id;


--
-- TOC entry 220 (class 1259 OID 16399)
-- Name: regions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.regions (
    regionid integer NOT NULL,
    carids integer[],
    latitude text,
    longitude text
);


ALTER TABLE public.regions OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16398)
-- Name: regions_regionid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.regions_regionid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.regions_regionid_seq OWNER TO postgres;

--
-- TOC entry 3391 (class 0 OID 0)
-- Dependencies: 219
-- Name: regions_regionid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.regions_regionid_seq OWNED BY public.regions.regionid;


--
-- TOC entry 218 (class 1259 OID 16390)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    userid integer NOT NULL,
    name text,
    surname text,
    history integer[],
    login text,
    password text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16389)
-- Name: users_userid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_userid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_userid_seq OWNER TO postgres;

--
-- TOC entry 3392 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_userid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_userid_seq OWNED BY public.users.userid;


--
-- TOC entry 3222 (class 2604 OID 16411)
-- Name: cars id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cars ALTER COLUMN id SET DEFAULT nextval('public.cars_id_seq'::regclass);


--
-- TOC entry 3221 (class 2604 OID 16402)
-- Name: regions regionid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions ALTER COLUMN regionid SET DEFAULT nextval('public.regions_regionid_seq'::regclass);


--
-- TOC entry 3220 (class 2604 OID 16393)
-- Name: users userid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN userid SET DEFAULT nextval('public.users_userid_seq'::regclass);


--
-- TOC entry 3384 (class 0 OID 16408)
-- Dependencies: 222
-- Data for Name: cars; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cars (id, model, manufacturer, img, latitude, longitude, range, available, price, horse_power, fuel_type, gearbox, cubic_capacity, mileage, color, year, registration_number, number_of_seats, number_of_doors) FROM stdin;
1	RS6 AVANT	Audi	./images/cars/audi_rs6.png	54.353306	18.652556	500	t	4.19	600	petrol	automatic	3996	10000	red	2021	GDA12345	5	5
2	E90	BMW	./images/cars/bmw_e90.png	54.354139	18.656167	200	t	3.49	200	diesel	manual	1996	200000	blue	2005	GDA54321	5	3
3	Urus	Lamborghini	./images/cars/urus.png	54.518708	18.556093	300	t	6.99	650	petrol	automatic	3996	10000	yellow	2021	GDA67890	5	5
\.


--
-- TOC entry 3382 (class 0 OID 16399)
-- Dependencies: 220
-- Data for Name: regions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.regions (regionid, carids, latitude, longitude) FROM stdin;
1	{1,2}	54.34	18.638306
2	{3}	54.518328	18.529379
\.


--
-- TOC entry 3380 (class 0 OID 16390)
-- Dependencies: 218
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (userid, name, surname, history, login, password) FROM stdin;
0	Robert	Zajac	{}	robzaj	robzaj
1	Kamil	Kowalski	{}	kamkow	kamkow
\.


--
-- TOC entry 3393 (class 0 OID 0)
-- Dependencies: 221
-- Name: cars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cars_id_seq', 1, false);


--
-- TOC entry 3394 (class 0 OID 0)
-- Dependencies: 219
-- Name: regions_regionid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.regions_regionid_seq', 1, false);


--
-- TOC entry 3395 (class 0 OID 0)
-- Dependencies: 217
-- Name: users_userid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_userid_seq', 1, false);


--
-- TOC entry 3231 (class 2606 OID 16418)
-- Name: cars cars_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_pkey PRIMARY KEY (id);


--
-- TOC entry 3233 (class 2606 OID 16420)
-- Name: cars cars_registration_number_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.cars
    ADD CONSTRAINT cars_registration_number_key UNIQUE (registration_number);


--
-- TOC entry 3229 (class 2606 OID 16406)
-- Name: regions regions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions
    ADD CONSTRAINT regions_pkey PRIMARY KEY (regionid);


--
-- TOC entry 3227 (class 2606 OID 16397)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (userid);


-- Completed on 2025-02-06 19:00:23 UTC

--
-- PostgreSQL database dump complete
--

