import useCurrentUser from "@/hooks/useCurrentUser";
import useEditModal from "@/hooks/useEditModal";
import useUser from "@/hooks/useUser";
import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-hot-toast";
import Modal from "../Modal";

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
        userName,
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
  return (
    <Modal
      disabled={loading}
      isOpen={editModal.isOpen}
      title="Edit your profile"
      actionLabel="Save"
      onClose={editModal.onClose}
      onSubmit={onSubmit}
    />
  );
};

export default EditModal;
