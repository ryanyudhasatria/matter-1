import {
  AnchorTextAtom,
  AvatarAtom,
  ButtonAtom,
  CardAtom,
  ClassroomHeaderAtom,
  H1Atom,
  H2Atom,
  H3Atom,
  IconAtom,
  ImageAtom,
  LinkTextAtom,
  // LogoAtom,
  ProgressBarAtom,
  TextAtom
} from './atoms';

import { AlertMolecule } from './molecules/Alert/AlertMolecule';
import { AnimatedButtonMolecule } from './molecules/AnimatedButton/AnimatedButtonMolecule';
import { BannerMolecule } from './molecules/Banner/BannerMolecule';
import { CourseCardMolecule } from './molecules/CourseCard/CourseCardMolecule';
import { HorizontalCourseCardMolecule } from './molecules/HorizontalCourseCard/HorizontalCourseCardMolecule';
import { CourseProgressCardMolecule } from './molecules/CourseProgressCard/CourseProgressCardMolecule';
import { SkillAssessmentCardMolecule } from './molecules/SkillAssessmentCard/SkillAssessmentCardMolecule';
import { LearningPathCardMolecule } from './molecules/LearningPathCard/LearningPathCardMolecule';
import { TeacherCardMolecule } from './molecules/TeacherCard/TeacherCardMolecule';
import { ReviewCardMolecule } from './molecules/ReviewCard/ReviewCardMolecule';
import { FooterMolecule } from './molecules/Footer/FooterMolecule';
import { LoaderMolecule } from './molecules/Loader/LoaderMolecule';

import { InputOrganism } from './organisms/Input/InputOrganism';
import { LearningTimeBarChartOrganism } from './organisms/LearningTimeBarChart/LearningTimeBarChartOrganism';
import { SelectOrganism } from './organisms/Select/SelectOrganism';

import { Confirmable } from './renderProps/Confirmable/Confirmable';
import { Notifiable } from './renderProps/Notifiable/Notifiable';

export {
  // ATOMS
  AnchorTextAtom,
  AvatarAtom,
  ButtonAtom,
  CardAtom,
  ClassroomHeaderAtom,
  // CourseTypeAtom,
  H1Atom,
  H2Atom,
  H3Atom,
  IconAtom,
  ImageAtom,
  LinkTextAtom,
  ProgressBarAtom,
  TextAtom,
  // MOLECULES
  AlertMolecule,
  AnimatedButtonMolecule,
  BannerMolecule,
  CourseCardMolecule,
  HorizontalCourseCardMolecule,
  SkillAssessmentCardMolecule,
  LearningPathCardMolecule,
  CourseProgressCardMolecule,
  TeacherCardMolecule,
  ReviewCardMolecule,
  FooterMolecule,
  LoaderMolecule,
  // ORGANISMS
  InputOrganism,
  LearningTimeBarChartOrganism,
  SelectOrganism,
  // RENDER PROPS
  Confirmable,
  Notifiable,
};
