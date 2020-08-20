-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Авг 20 2020 г., 17:25
-- Версия сервера: 10.4.11-MariaDB
-- Версия PHP: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `e-lern`
--

-- --------------------------------------------------------

--
-- Структура таблицы `courses`
--

CREATE TABLE `courses` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `preview` varchar(255) NOT NULL,
  `course_program` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` double NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `courses`
--

INSERT INTO `courses` (`id`, `title`, `preview`, `course_program`, `image`, `description`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 'Node.js', 'Sequelize - это ORM-библиотека для приложений на Node.js, которая осуществляет сопоставление таблиц в бд и отношений между ними с классами. При использовании Sequelize мы можем не писать SQL-запросы, а работать с данными как с обычными объектами. Причем S', '1. Node.js\r\n2. React\r\n3. QAngular', 'https://nodejs.org/static/images/logo.svg', 'Як асинхронне подієве JavaScript–оточення, Node.js спроектований для побудови масштабованих мережевих додатків. У нижче наведений приклад \"hello world\", який може одночасно обробляти багато з’єднань. Для кожного з’єднання викликається функція зворотнього виклику, проте коли з’єднань немає Node.js засинає.', 300, '2020-08-18 17:27:57', '2020-08-18 17:27:57'),
(2, 'React', 'Reacr librarry', '1. React\r\n2. Redux\r\n3. Exam', 'https://ru.wikipedia.org/wiki/React#/media/%D0%A4%D0%B0%D0%B9%D0%BB:React-icon.svg', 'React for beginers', 250, '2020-08-18 17:37:40', '2020-08-18 17:37:40');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
