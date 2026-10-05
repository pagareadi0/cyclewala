"use client";

<<<<<<< HEAD
import { useState } from "react";
=======
>>>>>>> c55a2b5653cfbe373cdeb904927879b2e2916552
import { createPortal } from "react-dom";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart";
import { SHOP } from "@/lib/site";
import StarRating from "@/components/ui/StarRating";
<<<<<<< HEAD
import ColorSwatches from "@/components/shop/ColorSwatches";
import { discountPct, shownFor } from "@/lib/variants";
=======
>>>>>>> c55a2b5653cfbe373cdeb904927879b2e2916552
import styles from "./ProductModal.module.css";

const CATEGORY_LABEL: Record<string, string> = {
  kids: "Kids' Cycles",
  mtb: "Mountain Cycles",
  hybrid: "City & Hybrid",
};

<<<<<<< HEAD
export default function ProductModal({
  product,
  initialColor,
  onClose,
}: {
  product: Product;
  initialColor?: string;
  onClose: () => void;
}) {
  const { addToCart } = useCart();
  const [color, setColor] = useState(initialColor);
  const shown = shownFor(product, color);
  const off = discountPct(shown.price, shown.regularPrice);
=======
export default function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const { addToCart } = useCart();
>>>>>>> c55a2b5653cfbe373cdeb904927879b2e2916552

  /* Rendered into <body>, not inside the shop section: a stacked section is
     its own layer, so a modal left inside it could be painted over by the
     sections that slide up after it. Only ever mounted after a click, so
     `document` always exists. */
  return createPortal(
    <>
      <button className={styles.scrim} aria-label="Close" onClick={onClose} />
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label={`${product.brand} ${product.model}`}>
        <button className={styles.close} onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className={styles.body}>
          <div className={styles.photo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
<<<<<<< HEAD
            <img src={shown.image} alt={`${product.brand} ${product.model}${shown.color ? ` – ${shown.color}` : ""}`} />
            <span className={shown.inStock ? styles.stockBadge : styles.stockBadgeOut}>
              {shown.inStock ? "In Stock" : "Out of Stock"}
=======
            <img src={product.image} alt={`${product.brand} ${product.model}`} />
            <span className={product.inStock ? styles.stockBadge : styles.stockBadgeOut}>
              {product.inStock ? "In Stock" : "Out of Stock"}
>>>>>>> c55a2b5653cfbe373cdeb904927879b2e2916552
            </span>
          </div>

          <div className={styles.info}>
            <p className={styles.category}>{CATEGORY_LABEL[product.category]}</p>
            <p className={styles.brand}>{product.brand}</p>
            <h2 className={styles.model}>{product.model}</h2>
<<<<<<< HEAD
            {product.tagline && <p className={styles.tagline}>{product.tagline}</p>}
            {product.rating > 0 && (
              <div className={styles.rating}>
                <StarRating value={product.rating} />
              </div>
            )}
            <p className={styles.sizes}>Sizes: {product.sizes}</p>

            {product.variants && product.variants.length > 0 && (
              <div className={styles.colors}>
                <p className={styles.colorsLabel}>
                  Colour: <strong>{shown.color}</strong>
                </p>
                <ColorSwatches variants={product.variants} selected={shown.color} onSelect={setColor} />
              </div>
            )}

            {product.description && <p className={styles.desc}>{product.description}</p>}

=======
            <div className={styles.rating}>
              <StarRating value={product.rating} />
            </div>
            <p className={styles.sizes}>Sizes: {product.sizes}</p>

>>>>>>> c55a2b5653cfbe373cdeb904927879b2e2916552
            <ul className={styles.specs}>
              {product.specs.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>

            <div className={styles.foot}>
<<<<<<< HEAD
              <span className={shown.price === null ? styles.priceTbc : styles.price}>
                {shown.price === null ? (
                  "Add: price"
                ) : (
                  <>
                    ₹{shown.price.toLocaleString("en-IN")}
                    {off > 0 && shown.regularPrice !== null && (
                      <>
                        <s className={styles.mrp}>₹{shown.regularPrice.toLocaleString("en-IN")}</s>
                        <span className={styles.off}>{off}% off</span>
                      </>
                    )}
                  </>
                )}
=======
              <span className={product.price === null ? styles.priceTbc : styles.price}>
                {product.price === null ? "Add: price" : `₹${product.price.toLocaleString("en-IN")}`}
>>>>>>> c55a2b5653cfbe373cdeb904927879b2e2916552
              </span>
              <div className={styles.ctaRow}>
                <button
                  className={styles.addBtn}
<<<<<<< HEAD
                  disabled={!shown.inStock}
                  onClick={() =>
                    addToCart({
                      slug: product.slug,
                      color: shown.color,
                      brand: product.brand,
                      model: product.model,
                      image: shown.image,
                      price: shown.price,
=======
                  onClick={() =>
                    addToCart({
                      slug: product.slug,
                      brand: product.brand,
                      model: product.model,
                      image: product.image,
                      price: product.price,
>>>>>>> c55a2b5653cfbe373cdeb904927879b2e2916552
                    })
                  }
                >
                  Add to Cart
                </button>
                <a className={styles.askBtn} href={SHOP.phoneHref}>
                  Ask about this →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
