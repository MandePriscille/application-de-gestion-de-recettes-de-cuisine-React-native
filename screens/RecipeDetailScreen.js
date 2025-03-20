import { StyleSheet, Text, View,  Image } from 'react-native';

export default function RecipeDetailScreen({ route }) {
    const { recipe } = route.params;
    return (
        <View style={styles.container}>
            <Image source={ recipe.image } style={styles.recipeImage} />
            <Text style={styles.recipeName}>{recipe.name}</Text>
            <Text style={styles.recipeDescription}>{recipe.description}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        paddingHorizontal: 15,
        backgroundColor: '#f5f5f5',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 20,
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        color: '#333',
    },
});