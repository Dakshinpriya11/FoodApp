// src/styles/common/layout.styles.ts
import { StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';// import Colors

export const layoutStyles = StyleSheet.create({
  // Full screen container with default background
  container: {
    flex: 1,
    backgroundColor: Colors.background, // replaced '#fff' with common color
  },

  // Center content both vertically and horizontally
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Padding wrapper for consistent spacing
  padded: {
    padding: 20,
  },

  // Row layout with vertical centering
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Row layout with space between items and vertical centering
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Optional: column layout with spacing between children
  column: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
});
