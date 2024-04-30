import { Box, Flex, Text, Input, Button, Tag, VStack, HStack } from '@chakra-ui/react';
import { useState } from 'react';

const developers = [
  { id: 1, name: 'Alice Johnson', location: 'New York', technologies: ['React', 'Node.js'] },
  { id: 2, name: 'Bob Smith', location: 'San Francisco', technologies: ['Angular', 'Python'] },
  { id: 3, name: 'Carol White', location: 'Toronto', technologies: ['Vue', 'PHP'] }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDevelopers, setFilteredDevelopers] = useState(developers);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = developers.filter(dev =>
      dev.name.toLowerCase().includes(value) ||
      dev.location.toLowerCase().includes(value) ||
      dev.technologies.some(tech => tech.toLowerCase().includes(value))
    );
    setFilteredDevelopers(filtered);
  };

  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" fontWeight="bold">Particles - Software Talent Marketplace</Text>
        <Input placeholder="Search by name, location, or technology" value={searchTerm} onChange={handleSearch} />
      </Flex>
      <VStack spacing={4} mt={5}>
        {filteredDevelopers.map(dev => (
          <Box key={dev.id} p={5} shadow="md" borderWidth="1px">
            <Text fontSize="xl">{dev.name}</Text>
            <Text>{dev.location}</Text>
            <HStack spacing={2}>
              {dev.technologies.map(tech => <Tag key={tech}>{tech}</Tag>)}
            </HStack>
            <Button mt={2} colorScheme="blue">Send Message</Button>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;