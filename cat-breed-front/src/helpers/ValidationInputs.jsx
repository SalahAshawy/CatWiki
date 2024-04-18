import validator from "validator";

export const validateInputs = ({catBreed,setErrors}) => {
    let errors = {};
    if (!catBreed.id || validator.isEmpty(catBreed.id)) {
      errors.id = "id is required";
    }
    if (!catBreed.name || validator.isEmpty(catBreed.name)) {
      errors.name = "Name is required";
    }
    if (!catBreed.description || validator.isEmpty(catBreed.description)) {
      errors.description = "Description is required";
    }
    if (!catBreed.origin || validator.isEmpty(catBreed.origin)) {
      errors.origin = "Origin is required";
    }
    if (!catBreed.life_span || validator.isEmpty(catBreed.life_span)) {
      errors.life_span = "life_span is required";
    }
    if (!catBreed. temperament || validator.isEmpty(catBreed. temperament)) {
      errors. temperament = "temperament is required";
    }
    if (!validator.isInt(catBreed.adaptability.toString(), { min: 1, max: 5 })) {
      errors.adaptability = "Adaptability must be between 1 and 5";
    }
    if (!validator.isInt(catBreed.affection_level.toString(), { min: 1, max: 5 })) {
      errors.affection_level = "Affection Level must be between 1 and 5";
    }
    if (!validator.isInt(catBreed.child_friendly.toString(), { min: 1, max: 5 })) {
      errors.child_friendly = "Child Friendly must be between 1 and 5";
    }
    if (!validator.isInt(catBreed.grooming.toString(), { min: 1, max: 5 })) {
      errors.grooming = "Grooming must be between 1 and 5";
    }
    if (!validator.isInt(catBreed.intelligence.toString(), { min: 1, max: 5 })) {
      errors.intelligence = "Intelligence must be between 1 and 5";
    }
    if (!validator.isInt(catBreed.health_issues.toString(), { min: 1, max: 5 })) {
      errors.health_issues = "Health Issues must be between 1 and 5";
    }
    if (!validator.isInt(catBreed.social_needs.toString(), { min: 1, max: 5 })) {
      errors.social_needs = "Social Needs must be between 1 and 5";
    }
    if (!validator.isInt(catBreed.stranger_friendly.toString(), { min: 1, max: 5 })) {
      errors.stranger_friendly = "Stranger Friendly must be between 1 and 5";
    }

    if (Object.keys(errors).length === 0) {
      return true;
    } else {
      setErrors(errors);
      return false;
    }
  };