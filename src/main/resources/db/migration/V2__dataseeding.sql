INSERT INTO public.colors (color_id, color_code, color_label, color_hex) VALUES (1, 'Blu', 'Blue', '#3185FC');
INSERT INTO public.colors (color_id, color_code, color_label, color_hex) VALUES (2, 'Red', 'Red', '#E84855');
INSERT INTO public.colors (color_id, color_code, color_label, color_hex) VALUES (3, 'Yel', 'Yellow', '#F9DC5C');
INSERT INTO public.colors (color_id, color_code, color_label, color_hex) VALUES (4, 'Cor', 'Coral', '#EFBCD5');


INSERT INTO public.widget_info (title, description, rating, slug) VALUES ('Vitality', 'manage your health', 4, 'Vitality-4');
INSERT INTO public.widget_info (title, description, rating, slug) VALUES ('StarGazer', 'View stars through a whole new lens', 2, 'StarGazer-2');
INSERT INTO public.widget_info (title, description, rating, slug) VALUES ( 'Tycoon', 'manage your wealth', 2.6, 'tycoon-2.6');
INSERT INTO public.widget_info (title, description, rating, slug) VALUES ( 'Zeus', 'find a charge', 4.7, 'zeus-4.7');
INSERT INTO public.widget_info (title, description, rating, slug) VALUES ( 'Sleeper', 'Find anywhere to sleep', 1.2, 'Sleeper-1.2');
INSERT INTO public.widget_info (title, description, rating, slug) VALUES ( 'Baby Sitter', 'A widget that can watch your kids', 0.3, 'Baby Sitter-0.3');
INSERT INTO public.widget_info (title, description, rating, slug) VALUES ('Test', 'Just making sure everything is here', 3, 'test-3');
INSERT INTO public.widget_info (title, description, rating, slug) VALUES ('Professor', 'Learn anything anywhere', 2, 'Professor-2');
INSERT INTO public.widget_info (title, description, rating, slug) VALUES ('Meat Head', 'Pump Iron anywhere', 4.2, 'Meat Head-4.2');
INSERT INTO public.widget_info (title, description, rating, slug) VALUES ('Chef', 'Take your cooking skills from zero to hero', 3.7, 'Chef-3.7');


INSERT INTO public.widget_color (color_id, widget_id) VALUES (1, 1);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (2, 2);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (3, 3);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (1, 3);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (2, 4);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (1, 4);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (3, 5);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (4, 18);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (2, 18);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (2, 19);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (4, 19);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (1, 19);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (4, 3);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (3, 22);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (2, 22);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (1, 23);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (4, 23);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (3, 23);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (2, 24);
INSERT INTO public.widget_color (color_id, widget_id) VALUES (3, 24);


INSERT INTO public.warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk) VALUES ( '2025-11-06 19:14:00.123000', null, 3, 'Active', 2);
INSERT INTO public.warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk) VALUES ( '2025-11-06 19:14:00.123000', null, 1, 'Active', 5);
INSERT INTO public.warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk) VALUES ( '57830-12-10 03:02:14.000000', null, 20, 'Active', 18);
INSERT INTO public.warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk) VALUES ('57836-03-18 13:46:03.000000', null, 25, 'Active', 19);
INSERT INTO public.warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk) VALUES ( '2025-11-06 19:14:00.123000', '57838-10-21 11:48:16.000000', 10, 'OSS_Permanent', 3);
INSERT INTO public.warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk) VALUES ('2025-11-06 19:14:00.123000', '57839-03-07 23:13:09.000000', -5, 'Retired', 1);
INSERT INTO public.warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk) VALUES ( '57839-03-12 04:28:18.000000', null, 22, 'Active', 23);
INSERT INTO public.warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk) VALUES ('57839-03-13 05:10:14.000000', null, 11, 'Active', 24);
INSERT INTO public.warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk) VALUES ( '57839-03-09 19:19:39.000000', '57839-03-13 18:31:29.000000', 7, 'Deleted', 22);
INSERT INTO public.warehouse (created_at_date, last_edit, quantity, life_cycle_status, widget_id_fk) VALUES ('2025-11-06 19:14:00.123000', '57839-03-16 03:21:50.000000', 14, 'Active', 4);


INSERT INTO public.images (image_url, widget_image_fk) VALUES ('/uploads/heart-pulse.png', 2);
INSERT INTO public.images (image_url, widget_image_fk) VALUES ('/uploads/zap.png', 5);
INSERT INTO public.images (image_url, widget_image_fk) VALUES ('/uploads/star.png', 3);
INSERT INTO public.images (image_url, widget_image_fk) VALUES ( '/uploads/test.png', 1);
INSERT INTO public.images (image_url, widget_image_fk) VALUES ( '/uploads/piggy-bank.png', 4);
INSERT INTO public.images (image_url, widget_image_fk) VALUES ( '/uploads/bed.png', 18);
INSERT INTO public.images (image_url, widget_image_fk) VALUES ( '/uploads/apple.png', 22);
INSERT INTO public.images (image_url, widget_image_fk) VALUES ( '/uploads/baby.png', 19);
INSERT INTO public.images (image_url, widget_image_fk) VALUES ( '/uploads/chef-hat.png', 24);
INSERT INTO public.images (image_url, widget_image_fk) VALUES ( '/uploads/biceps-flexed.png', 23);
