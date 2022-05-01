import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'juice',
    imageUrl: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    route: 'shop/juices',
  },
  {
    id: 2,
    title: 'smoothies',
    imageUrl: 'https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    route: 'shop/smoothies',
  },
  {
    id: 3,
    title: 'bowls',
    imageUrl: 'https://images.unsplash.com/photo-1604799933120-e306b7b50525?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWNhaWJvd2xzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
    route: 'shop/bowls',
  },
  {
    id: 4,
    title: 'apparel',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/apparel',
  },
  {
    id: 5,
    title: 'art',
    imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    route: 'shop/art',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;