function skillsMember(){
  return {
    name: 'skills',
    description: 'Manage your skills',
    options: [
      {
        name: 'add',
        description: 'Add a skill',
        args: {
          name: 'skill',
          description: 'The skill to add',
          isRequired: true,
        },
      },
      {
        name: 'remove',
        description: 'Remove a skill',
        args: {
          name: 'skill',
          description: 'The skill to remove',
          isRequired: true,
        },
      },
      {
        name: 'list',
        description: 'List all skills',
      },
    ],
  };
}
function skillsMemberCommand() {
  return {
    name: 'skills',
    description: 'Manage your skills',
    options: [
      {
        name: 'add',
        description: 'Add a skill',
        args: {
          name: 'skill',
          description: 'The skill to add',
          isRequired: true,
        },
      },
      {
        name: 'remove',
        description: 'Remove a skill',
        args: {
          name: 'skill',
          description: 'The skill to remove',
          isRequired: true,
        },
      },
      {
        name: 'list',
        description: 'List all skills',
      },
    ],
  };
}
function skillsMemberCommandOptions() {     
  return [
    {
      name: 'add',
      description: 'Add a skill',
      args: {
        name: 'skill',
        description: 'The skill to add',
        isRequired: true,
      },
    },
    {
      name: 'remove',
      description: 'Remove a skill',
      args: {
        name: 'skill',
        description: 'The skill to remove',
        isRequired: true,
      },
    },
    {
      name: 'list',
      description: 'List all skills',
    },
  ];
}
function skillsMemberCommandName() {
  return 'skills';
}       