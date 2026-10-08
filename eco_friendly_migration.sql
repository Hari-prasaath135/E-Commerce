-- ==============================================================================
-- Eco-Friendly E-Commerce Database Migration & Seeding Script
-- Description: Transforms categories, products, images, banners, deals, and
-- articles into a completely eco-friendly and circular economy concept.
-- Preserves all foreign key constraints, schemas, user accounts, orders, and business flows.
-- ==============================================================================

BEGIN;

-- 1. UPDATE OR INSERT ECO-FRIENDLY CATEGORIES
-- Main categories supported: FASHION (Apparel/Home), FOOTWEAR, COSMETICS, ELECTRONICS, JEWELLERY, PERFUME

-- Update or insert FASHION / APPAREL / HOME categories
INSERT INTO categories (categoryid, name, slug, maincategory) VALUES
(396120533, 'Organic Cotton Basics', 'organic-cotton', 'FASHION'),
(966726005, 'Hemp & Linen Casuals', 'hemp-linen', 'FASHION'),
(911347783, 'Recycled Fleece Outerwear', 'recycled-fleece', 'FASHION'),
(725423327, 'Bamboo Fiber Wear', 'bamboo-wear', 'FASHION'),
(202560683, 'Reusable Beeswax Wraps', 'beeswax-wraps', 'FASHION'),
(750590918, 'Bamboo Kitchenware', 'bamboo-kitchenware', 'FASHION'),
(912740617, 'Organic Canvas Totes', 'canvas-totes', 'FASHION')
ON CONFLICT (categoryid) DO UPDATE SET
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  maincategory = EXCLUDED.maincategory;

-- Update or insert FOOTWEAR categories
INSERT INTO categories (categoryid, name, slug, maincategory) VALUES
(397918237, 'Cork Sole Walkers', 'cork-walkers', 'FOOTWEAR'),
(359556955, 'Natural Rubber Slides', 'natural-rubber', 'FOOTWEAR'),
(204267683, 'Recycled Ocean Canvas', 'recycled-canvas', 'FOOTWEAR'),
(251327560, 'Organic Cotton Slips', 'cotton-slips', 'FOOTWEAR'),
(643579967, 'Vegan Piñatex Boots', 'pinatex-boots', 'FOOTWEAR'),
(642778541, 'Zero-Waste Espadrilles', 'zero-waste-espadrilles', 'FOOTWEAR'),
(430565804, 'Plant Leather Loafers', 'plant-leather-loafers', 'FOOTWEAR'),
(249520556, 'Biodegradable Clogs', 'biodegradable-clogs', 'FOOTWEAR'),
(701908564, 'Wild Harvested Rubber Flats', 'wild-rubber-flats', 'FOOTWEAR'),
(890668749, 'Hemp Fiber Lace-Ups', 'hemp-laceups', 'FOOTWEAR')
ON CONFLICT (categoryid) DO UPDATE SET
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  maincategory = EXCLUDED.maincategory;

-- Update or insert JEWELLERY categories
INSERT INTO categories (categoryid, name, slug, maincategory) VALUES
(704588137, 'Recycled Silver Pendants', 'recycled-silver', 'JEWELLERY'),
(651311796, 'Tagua Nut Botanical Earrings', 'tagua-earrings', 'JEWELLERY'),
(136330920, 'Ocean Sea Glass Rings', 'sea-glass', 'JEWELLERY'),
(124631722, 'Upcycled Wood Bracelets', 'wood-bracelets', 'JEWELLERY'),
(437537458, 'Ethical Raw Crystal Chains', 'raw-crystal', 'JEWELLERY'),
(914913022, 'Fairmined Brass Bangles', 'brass-bangles', 'JEWELLERY'),
(942241807, 'Hemp Cord Anklets', 'hemp-anklets', 'JEWELLERY'),
(225360974, 'Eco-Cast Nosepins', 'eco-nosepins', 'JEWELLERY'),
(886321955, 'Recycled Gold Chokers', 'recycled-gold', 'JEWELLERY')
ON CONFLICT (categoryid) DO UPDATE SET
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  maincategory = EXCLUDED.maincategory;

-- Update or insert COSMETICS categories
INSERT INTO categories (categoryid, name, slug, maincategory) VALUES
(133633789, 'Zero-Waste Shampoo Bars', 'shampoo-bars', 'COSMETICS'),
(647581779, 'Cold-Pressed Botanical Soap', 'botanical-soap', 'COSMETICS'),
(287894345, 'Herbal Clay Facial Cleanse', 'clay-cleanse', 'COSMETICS'),
(604915562, 'Zero-Plastic Care Kit', 'care-kit', 'COSMETICS'),
(170032536, 'Plant Pigment Lip Butter', 'lip-butter', 'COSMETICS'),
(949689297, 'Organic Beeswax Balm', 'beeswax-balm', 'COSMETICS'),
(249255664, 'Wild botanical Elixir', 'botanical-elixir', 'COSMETICS'),
(49743134, 'Shea Butter Body Bar', 'shea-bar', 'COSMETICS'),
(279512860, 'Coffee Ground Body Scrub', 'coffee-scrub', 'COSMETICS'),
(561330193, 'Flaxseed Hair Gel', 'flaxseed-gel', 'COSMETICS'),
(802093982, 'Henna Plant Dye', 'henna-dye', 'COSMETICS'),
(183994337, 'Herbal Root Rinse', 'root-rinse', 'COSMETICS'),
(989205241, 'Mineral Reef-Safe Sunscreen', 'mineral-sunscreen', 'COSMETICS'),
(217256273, 'Aloe Vera Hydration Lotion', 'aloe-lotion', 'COSMETICS')
ON CONFLICT (categoryid) DO UPDATE SET
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  maincategory = EXCLUDED.maincategory;

-- Update or insert ELECTRONICS categories
INSERT INTO categories (categoryid, name, slug, maincategory) VALUES
(319456917, 'Solar Power Banks', 'solar-chargers', 'ELECTRONICS'),
(237505672, 'Bamboo Mechanical Keyboards', 'bamboo-keyboards', 'ELECTRONICS'),
(84962408, 'Biodegradable Phone Cases', 'compostable-cases', 'ELECTRONICS'),
(823874113, 'Wooden Acoustic Speakers', 'eco-speakers', 'ELECTRONICS'),
(289031849, 'Recycled Fiber Cables', 'recycled-cables', 'ELECTRONICS'),
(953684141, 'Reclaimed Wood Solar Watches', 'wood-watches', 'ELECTRONICS'),
(417528785, 'Energy Smart Home Monitors', 'smart-monitors', 'ELECTRONICS'),
(103787219, 'Bamboo Ergonomic Mouse', 'bamboo-mouse', 'ELECTRONICS'),
(651586995, 'Cork Desk Mat Accessories', 'cork-desk-mat', 'ELECTRONICS'),
(540135577, 'Reclaimed Wood Stand', 'wood-stand', 'ELECTRONICS')
ON CONFLICT (categoryid) DO UPDATE SET
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  maincategory = EXCLUDED.maincategory;

-- Update or insert PERFUME categories
INSERT INTO categories (categoryid, name, slug, maincategory) VALUES
(581619279, 'Pure Botanical Essential Oils', 'essential-oils', 'PERFUME'),
(28885920, 'Natural Mineral Deodorant', 'mineral-deodorant', 'PERFUME'),
(140958697, 'Wildflower Linen Mist', 'linen-mist', 'PERFUME'),
(490127086, 'Soy Wax Aromatherapy Candle', 'soy-candles', 'PERFUME')
ON CONFLICT (categoryid) DO UPDATE SET
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  maincategory = EXCLUDED.maincategory;

-- Update MEN & WOMEN legacy categories to eco alternatives
INSERT INTO categories (categoryid, name, slug, maincategory) VALUES
(741474101, 'Organic Linen Shirts', 'organic-linen', 'WOMEN'),
(228396634, 'Hemp Relaxed Dresses', 'hemp-dresses', 'WOMEN'),
(695797566, 'Botanical Perfume Oils', 'botanical-perfume', 'WOMEN'),
(15072800, 'Plastic-Free Skincare', 'plastic-free-skin', 'WOMEN'),
(659879521, 'Cork & Jute Bags', 'cork-jute-bags', 'WOMEN'),
(779437084, 'Tagua Seed Earrings', 'tagua-earrings-w', 'WOMEN'),
(278725462, 'Recycled Silver Necklaces', 'silver-necklace-w', 'WOMEN'),
(188464849, 'Compostable Care Set', 'compostable-care-w', 'WOMEN'),
(294844724, 'Organic Oxford Shirt', 'organic-oxford', 'MEN'),
(583086156, 'Hemp Canvas Chinos', 'hemp-chinos', 'MEN'),
(200629899, 'Bamboo Activewear', 'bamboo-active', 'MEN'),
(475582934, 'Recycled Wool Overshirt', 'recycled-wool', 'MEN'),
(507914870, 'Bamboo Polarized Eyewear', 'bamboo-eyewear', 'MEN'),
(723618655, 'GOTS Organic Tee', 'gots-tee', 'MEN'),
(930057630, 'Cork Slim Wallet', 'cork-wallet-m', 'MEN')
ON CONFLICT (categoryid) DO UPDATE SET
  name = EXCLUDED.name,
  slug = EXCLUDED.slug,
  maincategory = EXCLUDED.maincategory;

-- 2. UPDATE HERO BANNERS
UPDATE banners SET
  toptitle = 'Regenerative Living',
  middletitle = 'Zero-Waste Home & Kitchen',
  bottomtitle = 'Mindful essentials starting at $',
  imglink = 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=80',
  startprice = 14.00,
  buttontitle = 'Shop Zero-Waste',
  redirect_link = '/categories/fashion'
WHERE bannerid = 1;

UPDATE banners SET
  toptitle = 'Earth-Friendly Fiber',
  middletitle = 'Certified Organic Cotton & Hemp',
  bottomtitle = 'Low-water apparel starting at $',
  imglink = 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1400&q=80',
  startprice = 28.00,
  buttontitle = 'Explore Apparel',
  redirect_link = '/categories/fashion'
WHERE bannerid = 2;

UPDATE banners SET
  toptitle = 'Clean Energy Tech',
  middletitle = 'Solar Chargers & Bamboo Accessories',
  bottomtitle = 'Off-grid green gadgets starting at $',
  imglink = 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=1400&q=80',
  startprice = 22.00,
  buttontitle = 'Discover Clean Tech',
  redirect_link = '/categories/electronics'
WHERE bannerid = 3;

-- 3. UPDATE SUSTAINABILITY ARTICLES
UPDATE articles SET
  category = 'Zero-Waste Guide',
  title = '10 Easy Swaps to Cut Household Plastic by 80% This Month',
  imglink = 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
  author = 'Dr. Maya Lindqvist',
  content = 'Discover how simple shifts—from solid shampoo bars and beeswax wraps to reusable produce sacks—create an immediate and measurable drop in landfill waste without disrupting daily routines.'
WHERE article_id = 1;

UPDATE articles SET
  category = 'Sustainable Fashion',
  title = 'Why Hemp and Organic Cotton are Transforming Modern Textiles',
  imglink = 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80',
  author = 'Julian Chen',
  content = 'Hemp produces up to three times more usable fiber per acre than cotton while enriching topsoil and requiring virtually no chemical pesticides. Here is how modern regenerative farming makes it luxurious.'
WHERE article_id = 2;

UPDATE articles SET
  category = 'Clean Tech',
  title = 'How Portable Solar & Monocrystalline Cells Minimize Your Tech Footprint',
  imglink = 'https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=600&q=80',
  author = 'Amina Al-Mansoor',
  content = 'Harvesting sunlight on your balcony or commute to charge everyday mobile devices helps curb phantom grid draw while teaching circular energy literacy.'
WHERE article_id = 3;

UPDATE articles SET
  category = 'Circular Living',
  title = 'The True Cost of Fast Fashion and the Rise of Repair Culture',
  imglink = 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80',
  author = 'Elena Rostova',
  content = 'By investing in durable natural materials like cork, organic wool, and GOTS cotton, garments last years rather than weeks, dramatically lowering household environmental footprints.'
WHERE article_id = 4;

-- 4. UPDATE PRODUCT NAMES, DESCRIPTIONS & IMAGES TO REFLECT ECO CONCEPTS
-- Update existing catalog items with eco titles, sustainable descriptions, tags, and images
UPDATE products SET
  title = 'Recycled Wool Sherpa Overshirt',
  description = 'Crafted from 100% post-consumer recycled wool fleece. Warm, breathable, and fully circular.',
  categoryid = 911347783,
  price = 85.00,
  discount = 65.00,
  tags = 'recycled,wool,fleece,sustainable,outerwear'
WHERE productid = 34000034;

UPDATE productimages SET
  imglink = 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80',
  imgalt = 'Recycled Wool Sherpa Overshirt'
WHERE productid = 34000034 AND isprimary = true;

UPDATE products SET
  title = 'GOTS Organic Cotton Everyday Shirt',
  description = 'Pure 100% certified organic cotton, dyed with closed-loop water treatment and botanical pigments.',
  categoryid = 396120533,
  price = 56.00,
  discount = 45.00,
  tags = 'organic,cotton,gots,shirt,low-impact'
WHERE productid = 34100034;

UPDATE productimages SET
  imglink = 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
  imgalt = 'GOTS Organic Cotton Everyday Shirt'
WHERE productid = 34100034 AND isprimary = true;

UPDATE products SET
  title = 'Recycled Fleece Full-Zip Jacket',
  description = 'Ultra-plush insulating fleece woven entirely from diverted plastic bottles. Certified circular.',
  categoryid = 911347783,
  price = 72.00,
  discount = 58.00,
  tags = 'recycled,fleece,jacket,circular,winter'
WHERE productid = 34200034;

UPDATE productimages SET
  imglink = 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80',
  imgalt = 'Recycled Fleece Full-Zip Jacket'
WHERE productid = 34200034 AND isprimary = true;

UPDATE products SET
  title = 'Organic Hemp Relaxed Trousers',
  description = 'Breathable pure hemp fiber grown with zero synthetic fertilizers and 75% less water than cotton.',
  categoryid = 966726005,
  price = 68.00,
  discount = 54.00,
  tags = 'hemp,trousers,natural,low-water,compostable'
WHERE productid = 34300034;

UPDATE productimages SET
  imglink = 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
  imgalt = 'Organic Hemp Relaxed Trousers'
WHERE productid = 34300034 AND isprimary = true;

UPDATE products SET
  title = 'Natural Cork Sole Everyday Walkers',
  description = 'Sustainably stripped Portuguese oak cork sole with natural latex footbed. Plastic-free walking.',
  categoryid = 397918237,
  price = 105.00,
  discount = 89.00,
  tags = 'cork,shoes,sustainable,footwear,rubber'
WHERE productid = 34400034;

UPDATE productimages SET
  imglink = 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=600&q=80',
  imgalt = 'Natural Cork Sole Everyday Walkers'
WHERE productid = 34400034 AND isprimary = true;

UPDATE products SET
  title = 'Reclaimed Sandalwood Pocket Case',
  description = 'Carved by hand from fallen sandalwood branches. Lined with organic undyed cork fabric.',
  categoryid = 953684141,
  price = 45.00,
  discount = 38.00,
  tags = 'sandalwood,reclaimed,cork,handcrafted'
WHERE productid = 34500034;

UPDATE productimages SET
  imglink = 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80',
  imgalt = 'Reclaimed Sandalwood Pocket Case'
WHERE productid = 34500034 AND isprimary = true;

UPDATE products SET
  title = 'Solar-Powered Bamboo Minimalist Watch',
  description = 'Runs continuously on natural ambient light with no disposable batteries. Certified bamboo body.',
  categoryid = 953684141,
  price = 135.00,
  discount = 110.00,
  tags = 'solar,bamboo,watch,zero-battery,renewable'
WHERE productid = 34600034;

UPDATE productimages SET
  imglink = 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80',
  imgalt = 'Solar-Powered Bamboo Watch'
WHERE productid = 34600034 AND isprimary = true;

UPDATE products SET
  title = 'Natural Hevea Rubber Eco Slides',
  description = 'Tapped from living rubber trees without harm. Slip-resistant, waterproof, and biodegradable.',
  categoryid = 359556955,
  price = 38.00,
  discount = 29.00,
  tags = 'rubber,slides,biodegradable,sustainable,shoes'
WHERE productid = 34700034;

UPDATE productimages SET
  imglink = 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80',
  imgalt = 'Natural Hevea Rubber Eco Slides'
WHERE productid = 34700034 AND isprimary = true;

UPDATE products SET
  title = 'Recycled Ocean Canvas Sneakers',
  description = 'Upper woven with intercepted marine ocean plastic bottles. Natural latex sole and algae foam.',
  categoryid = 204267683,
  price = 85.00,
  discount = 68.00,
  tags = 'ocean-plastic,canvas,sneakers,recycled,footwear'
WHERE productid = 34900034;

UPDATE productimages SET
  imglink = 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80',
  imgalt = 'Recycled Ocean Canvas Sneakers'
WHERE productid = 34900034 AND isprimary = true;

UPDATE products SET
  title = 'Organic Cotton Lounge Sweatshorts',
  description = 'Unbleached French Terry organic cotton sweatshorts. Plastic-free cotton drawstrings.',
  categoryid = 966726005,
  price = 45.00,
  discount = 36.00,
  tags = 'organic,cotton,loungewear,shorts,gots'
WHERE productid = 35100034;

UPDATE productimages SET
  imglink = 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
  imgalt = 'Organic Cotton Lounge Sweatshorts'
WHERE productid = 35100034 AND isprimary = true;

UPDATE products SET
  title = 'Zero-Waste Organic Beeswax Wraps (Pack of 4)',
  description = 'Eliminate single-use plastic cling wrap. Infused with ethical organic beeswax, jojoba oil, and tree resin.',
  categoryid = 202560683,
  price = 24.00,
  discount = 18.00,
  tags = 'zero-waste,beeswax,kitchen,plastic-free,compostable'
WHERE productid = 20000001;

UPDATE productimages SET
  imglink = 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
  imgalt = 'Organic Beeswax Food Wraps'
WHERE productid = 20000001 AND isprimary = true;

UPDATE products SET
  title = 'Cast Solid Shampoo & Conditioner Bar',
  description = 'Concentrated waterless shampoo bar. Replaces 3 plastic bottles with nourishing botanical extracts.',
  categoryid = 133633789,
  price = 18.00,
  discount = 14.00,
  tags = 'shampoo,bar,zero-waste,waterless,plastic-free'
WHERE productid = 20000023;

UPDATE productimages SET
  imglink = 'https://images.unsplash.com/photo-1608248597359-07b973f55403?auto=format&fit=crop&w=600&q=80',
  imgalt = 'Solid Shampoo Bar'
WHERE productid = 20000023 AND isprimary = true;

UPDATE products SET
  title = 'Recycled Eco-Silver Leaf Pendant',
  description = 'Cast from 100% recycled silver diverted from discarded electronics. Certified ethical jewelry.',
  categoryid = 704588137,
  price = 72.00,
  discount = 58.00,
  tags = 'recycled-silver,jewelry,pendant,conflict-free,ethical'
WHERE productid = 20000018;

UPDATE productimages SET
  imglink = 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=600&q=80',
  imgalt = 'Recycled Silver Leaf Pendant'
WHERE productid = 20000018 AND isprimary = true;

UPDATE products SET
  title = 'Wild Botanical Amber Perfume Oil',
  description = 'Alcohol-free organic essential oil fragrance in a refillable amber glass roller vial.',
  categoryid = 581619279,
  price = 42.00,
  discount = 32.00,
  tags = 'perfume,botanical,essential-oil,natural,refillable'
WHERE productid = 20000019;

UPDATE productimages SET
  imglink = 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80',
  imgalt = 'Wild Botanical Perfume Oil'
WHERE productid = 20000019 AND isprimary = true;

-- 5. UPDATE DEAL OF THE DAY
UPDATE deals SET
  sold = 142,
  available = 35,
  end_time = CURRENT_TIMESTAMP + INTERVAL '3 days'
WHERE dealid = 1;

COMMIT;
