users
=====
first_name
middle_name
last_name
gender
highest_qualification
date_of_birth
phone
email
program_type_id
address
province_id
province_town_city_id
postal_code
account_status

incorporation_name
incorporation_address

notes
resume
id_card
void_check_doc

hst_no
assign_admin

assign_director_id

account_type


pre_employment_assessments
===========================
id
user_id
status
scheduled_date
created_by


assessment_results
==================
id
user_id
program_type_id
knowledge_area_type
knowledge_area_id
no_of_correct_answer
score
created_by


program_types**
=============
id
name
status


knowledge_areas**
===============
id
program_type_id
knowledge_area_type
name
no_of_question
status


assessment_interviews
=====================
id
user_id
status (pass or fail)
scheduled_date
created_by


service_agreements
==================
id
user_id
olade_contract_id

date_opened
date_signed
signature
status
created_by


profile_discussions
===================
id
user_id
status (completed,pending)
scheduled_date
created_by


resume_walkthroughs
===================
id
user_id
status (completed,pending)
scheduled_date
created_by


mock_interviews
===============
id
user_id
status (completed,pending)
scheduled_date
created_by


mock_interview_results
======================
id
user_id
first_trial
second_trial
created_by
updated_by



profile_launches
================
id
user_id
email_password
resume
created_by



job_applications
================
id
user_id
job_title
job_id_string
job_type
job_status
company_name
interview_date
job_description




onboardings
===========
job_application_id
type ==> direct or job_application
job_type
client_name
olade_percent***
vendor_id
back_check_status

[fte]
annual_salary

[contract]
olade_contract_id
vendor_rate
olade_rate
consultant_incorporation_name
void_check
incorporation_cost
insurance_cost
hst_no


onboarding_status
start_date
end_date





