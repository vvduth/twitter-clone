import useCurrentUser from "@/hooks/useCurrentUser";
import useEditModal from "@/hooks/useEditModal";
import useUser from "@/hooks/useUser";
import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";
import Modal from "../Modal";
import Input from "../Input";
import ImageUpload from "../ImageUpload";

const EditModal = () => {
  const { data: currentUser } = useCurrentUser();
  const { mutate: mutateFetchUser } = useUser(currentUser?.id);
  const editModal = useEditModal();

  const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    setProfileImage(currentUser?.profileImage);
    setName(currentUser?.name);
    setBio(currentUser?.bio);
    setCoverImage(currentUser?.coverImage);
    setUserName(currentUser?.username);
  }, [
    currentUser?.name,
    currentUser?.bio,
    currentUser?.profileImage,
    currentUser?.coverImage,
    currentUser?.username,
  ]);

  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(async () => {
    try {
      setLoading(true);
      await axios.patch("/api/edit", {
        name,
        username: userName,
        bio,
        profileImage,
        coverImage,
      });
      mutateFetchUser();
      toast.success("Updated successfully");
      editModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [
    bio,
    name,
    editModal,
    userName,
    profileImage,
    coverImage,
    mutateFetchUser,
  ]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <ImageUpload value= {profileImage} disabled={loading} onChange={(image) => setProfileImage(image)} label="Uplaod profile Image" />
      <ImageUpload value= {coverImage} disabled={loading} onChange={(image) => setCoverImage(image)} label="Upload cover Image" />
      <Input 
        placeholder="Name"
        onChange={(e) => {setName(e.target.value)}}
        value={name}
        disabled={loading}
      />
      <Input 
        placeholder="Username"
        onChange={(e) => {setUserName(e.target.value)}}
        value={userName}
        disabled={loading}
      />
      <Input 
        placeholder="Bio"
        onChange={(e) => {setBio(e.target.value)}}
        value={bio}
        disabled={loading}
      />
    </div>
  )
  return (
    <Modal
      disabled={loading}
      isOpen={editModal.isOpen}
      title="Edit your profile"
      actionLabel="Save"
      onClose={editModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
    />
  );
};

export default EditModal;
