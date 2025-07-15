// components/ProjectPdf.jsx
import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

// Stylowanie PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
    objectFit: 'cover',
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  listItem: {
    marginBottom: 4,
  },
});

export default function ProjectPdf({ title, mainImage, images, materials, description }) {
  return (
    <Document>
      {/* STRONA 1 */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{title}</Text>
        <Image src={mainImage} style={styles.image} />

        <View style={styles.section}>
          <Text style={{ fontWeight: 'bold' }}>Materiały:</Text>
          {materials.map((item, idx) => (
            <Text key={idx} style={styles.listItem}>• {item}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={{ fontWeight: 'bold' }}>Opis:</Text>
          <Text>{description}</Text>
        </View>
      </Page>

      {/* STRONY ZDJĘĆ */}
      {images.map((img, idx) => (
        <Page key={idx} size="A4" style={styles.page}>
          <Image src={img} style={styles.image} />
        </Page>
      ))}
    </Document>
  );
}
