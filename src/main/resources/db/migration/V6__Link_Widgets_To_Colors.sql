INSERT INTO widget_color (widget_id, color_id)
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'Vitality-4' AND c.color_hex = '#3185FC'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'Vitality-4' AND c.color_hex = '#EFBCD5'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'StarGazer-2' AND c.color_hex = '#E84855'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'StarGazer-2' AND c.color_hex = '#F9DC5C'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'Tycoon-2.6' AND c.color_hex = '#3185FC'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'Zeus-4.7' AND c.color_hex = '#3185FC'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'Zeus-4.7' AND c.color_hex = '#E84855'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'Zeus-4.7' AND c.color_hex = '#EFBCD5'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'Sleeper-1.2' AND c.color_hex = '#F9DC5C'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'Baby Sitter-0.3' AND c.color_hex = '#EFBCD5'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'test-3' AND c.color_hex = '#3185FC'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'test-3' AND c.color_hex = '#E84855'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'Professor-2' AND c.color_hex = '#3185FC'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'Professor-2' AND c.color_hex = '#E84855'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'Professor-2' AND c.color_hex = '#F9DC5C'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'Meat Head-4.2' AND c.color_hex = '#E84855'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'Meat Head-4.2' AND c.color_hex = '#F9DC5C'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'Chef-3.7' AND c.color_hex = '#3185FC'
UNION ALL
SELECT w.id, c.color_id FROM widget_info w JOIN colors c ON 1=1
WHERE w.slug = 'Chef-3.7' AND c.color_hex = '#EFBCD5';