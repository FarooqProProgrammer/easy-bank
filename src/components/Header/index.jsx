import { Avatar, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Input, List, ListIcon, ListItem, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineEdit, AiOutlineUser, AiOutlineLeft, AiOutlineMenu, AiOutlineRight, AiOutlineNotification, AiOutlineSearch, AiOutlineSetting } from 'react-icons/ai'
import { MdUpgrade } from "react-icons/md"
import { RiTodoLine } from "react-icons/ri"
import BottomSheetModal from '../../common/BottomSheetModal'

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className=' w-full flex py-2  px-2   border shadow-lg bg-green-500  justify-between items-center'>

                <IconButton onClick={onOpen} ref={btnRef}>
                    <AiOutlineMenu />
                </IconButton>

                <Text color={'white'} fontSize={22}>Easy Bank</Text>

                <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={2}
                >
                    <IconButton onClick={openModal}>
                        <AiOutlineSearch />
                    </IconButton>
                    <IconButton>
                        <AiOutlineNotification />
                    </IconButton>

                </Flex>

            </div>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>

                    <Box p={2}>
                        <AiOutlineLeft />
                    </Box>
                    <DrawerBody>
                        <Flex
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            px={1}
                        >
                            <Flex
                                flexDirection={'column'}
                                justifyContent={'start'}
                                alignItems={'start'}
                                gap={1}
                            >
                                <Text fontSize={18} fontWeight={800}>My Account</Text>
                                <p>Profile, Settings & More</p>
                            </Flex>


                        </Flex>
                        <Box mt={3} py={4} className='w-full flex justify-center items-center gap-4 py-2 rounded-lg bg-green-500'>
                            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                            <Flex
                                flexDirection={'column'}
                                justifyContent={'start'}
                                alignItems={'start'}

                            >
                                <p className='lg:text-4xl text-white md:text-3xl sm:text-xl'>Muhammad Farooq</p>
                                <p className='text-white'>03090450173</p>

                            </Flex>
                            <IconButton>
                                <AiOutlineEdit />
                            </IconButton>
                        </Box>
                        <div className='w-full max-h-[280px] overflow-y-auto '>
                            <List spacing={2} mt={5} >
                                <ListItem display={'flex'} py={1}>
                                    <ListIcon as={MdUpgrade} fontSize={22} color='green.500' />
                                    Upgrade
                                </ListItem>
                                <ListItem display={'flex'} py={1}>
                                    <ListIcon as={AiOutlineUser} fontSize={22} color='green.500' />
                                    Account Level
                                </ListItem>
                                <ListItem display={'flex'} py={1}>
                                    <ListIcon as={AiOutlineSetting} fontSize={22} color='green.500' />
                                    Account Settings
                                </ListItem>
                                <ListItem display={'flex'} py={1}>
                                    <ListIcon as={RiTodoLine} fontSize={22} color='green.500' />
                                    Transaction History
                                </ListItem>

                            </List>
                        </div>

                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>


            <BottomSheetModal isOpen={isModalOpen} onClose={closeModal}>
                <div className='w-full flex'>
                    <input className='py-2 w-full  px-3 rounded-md border border-black outline-none' placeholder='Search' />
                </div>
            </BottomSheetModal>
        </>

    )
}
