import styles from "@/styles/components/features-card/Features.module.css";
import Card from "./Card";

export default function FeaturesCard() {
  return (
    <div className={styles.featuresContainer}>
      <Card
        content={[
          {
            title: "High-Quality",
            text: "Elaborados por profissionais qualificados usando ingredientes frescos e de alta qualidade, nossos hambúrgueres são projetados para deliciar seu paladar! ",
          },
          {
            title: "Try Our Innovative Burgers ",
            text: "Discover our latest creations, including a delicious new vegan burger that’s bursting with flavor. Whether you’re a meat lover or looking for plant-based options, our menu has something to tantalize your taste buds!",
          },
          {
            title: "Fastest Delivery",
            text: "Your meal arrives piping hot, thanks to the fastest delivery service in the area! Enjoy your delicious burgers the way they should be — fresh and hot!",
          },
        ]}
      />
    </div>
  );
}
