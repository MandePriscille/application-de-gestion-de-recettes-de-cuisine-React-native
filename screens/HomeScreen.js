import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';

export default function HomeScreen({ navigation }){
    const [recipes, setRecipies] = useState([
        {id: '1', name: 'pizza', description: 'pizza maison delicieuse', image: '../assets/images.jpeg' },
        {id: '2', name: 'pates', description: 'pates au pesto', image: '../assets/images.jpeg' },
        {id: '2', name: 'pates', description: 'pates au pesto', image: '../assets/images.jpeg' },
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Liste des recettes</Text>
            <FlatList
                data={recipes}
                renderItem={({ item }) => (
                    <TouchableOpacity
                    style={styles.recipeItem}
                    onPress={() => navigation.navigate('RecipeDetail', { recipe: item })}
                    >
                    
                    <Image source={{ uri: item.image }} style={styles.recipeImage} />
                    <Text style={styles.recipeName}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddRecipe')}
            >
            <Text style={styles.addButtonText}>Ajouter une Recettett</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 15,
        backgroundColor: '#acccff',
    },
    title:{
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    recipeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    recipeName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    addButton: {
        backgroundColor: '#2ecc71',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
      },
      addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
