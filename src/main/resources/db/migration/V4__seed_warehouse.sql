INSERT INTO warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk)
SELECT '2025-11-06 19:14:00', NULL, 3, 'Active', id
FROM widget_info WHERE slug = 'Vitality-4';

INSERT INTO warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk)
SELECT '2025-11-06 19:14:00', '2025-11-10 11:00:00', 10, 'OSS_Permanent', id
FROM widget_info WHERE slug = 'StarGazer-2';

INSERT INTO warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk)
SELECT '2025-11-06 19:14:00', NULL, 20, 'Active', id
FROM widget_info WHERE slug = 'Tycoon-2.6';

INSERT INTO warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk)
SELECT '2025-11-06 19:14:00', NULL, 25, 'Active', id
FROM widget_info WHERE slug = 'Zeus-4.7';

INSERT INTO warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk)
SELECT '2025-11-06 19:14:00', NULL, 15, 'Active', id
FROM widget_info WHERE slug = 'Sleeper-1.2';

INSERT INTO warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk)
SELECT '2025-11-06 19:14:00', '2025-11-07 15:00:00', 2, 'Deleted', id
FROM widget_info WHERE slug = 'Baby Sitter-0.3';

INSERT INTO warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk)
SELECT '2025-11-06 19:14:00', '2025-11-07 15:00:00', 0, 'Retired', id
FROM widget_info WHERE slug = 'test-3';

INSERT INTO warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk)
SELECT '2025-11-06 19:14:00', null, 11, 'Active', id
FROM widget_info WHERE slug = 'Professor-2';

INSERT INTO warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk)
SELECT '2025-11-06 19:14:00', null, 15, 'Active', id
FROM widget_info WHERE slug = 'Meat Head-4.2';

INSERT INTO warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk)
SELECT '2025-11-06 19:14:00', NULL, 14, 'Active', id
FROM widget_info WHERE slug = 'Chef-3.7';