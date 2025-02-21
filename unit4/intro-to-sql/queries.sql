-- -- this is a comment

-- -- Insert a single row
-- INSERT INTO bands (name, genre) 
-- VALUES 
-- ('The Beatles', 'Rock');

-- -- Insert multiple rows
-- INSERT INTO bands (name, genre) 
-- VALUES 
-- ('The Rolling Stones', 'Rock'), 
-- ('The Who', 'Rock');


-- -- Query bands where the genre is 'Rock'
-- SELECT name FROM bands WHERE genre = 'Rock';

-- -- Query bands sorted by name in ascending order
-- SELECT genre FROM bands ORDER BY name ASC;

-- -- Query the first two bands
-- SELECT * FROM bands LIMIT 2;

-- -- Count the number of bands
-- SELECT COUNT(*) FROM bands;
