import { StyleSheet, Text, View, TextInput, Button, Arlert } from 'react-native';
import { useState } from 'react';

export default function AddRecipeScreen({ navigation }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleAddRecipe = () => {
        if (!name.trim() || !description.trim()){
            Arlert.alert('Erreur', 'veuillez remplir le nom de la description');
            return;
        }

        const newRecipe = {
            id: Date.now().toString(),
            name,
            description,
            image: image.trim() || 'https://via.placeholder.com/150',
        };

        navigation.navigate('Home', { newRecipe });
        setName('');
        setDescription('');
        setImage('');
    };

    return (
        <View style={StyleSheet.container}>
            <Text style={styles.title}>Nouvelle Recette ddd</Text>
            <TextInput
                style={styles.input}
                placeholder="Nom de la recette"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Description de la recette"
                value={description}
                onChangeText={setDescription}
                multiline
            />
            <TextInput
                style={styles.input}
                placeholder="Image de la recette"
                value={image}
                onChangeText={setImage}
            />
            <Button title="Ajouter" onPress={handleAddRecipe} />    
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 15,
        backgroundColor: '#f5f5f5',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 15,
        backgroundColor: '#fff',
    },
});

